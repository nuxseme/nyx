<?php

namespace App\Admin\Controllers;

use App\Admin\Repositories\Subject;
use App\Models\Product;
use Dcat\Admin\Form;
use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use Dcat\Admin\Http\Controllers\AdminController;
use Illuminate\Support\Facades\DB;

class SubjectController extends AdminController
{
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Grid::make(new Subject(), function (Grid $grid) {
            //$grid->column('id')->sortable();
            $grid->number('序号');
            $grid->column('title','科目标题');
            $grid->column('product_title','产品标题')->display(function (){
                return Product::where('serial',$this->serial)->first()->title;
            })->limit('20');;
            $grid->column('serial','产品编号');
            $grid->column('unit')->display(function (){
                return sprintf('第%s联',$this->unit);
            });
            $grid->column('wiki')->display(function (){
                return strip_tags($this->wiki);
            })->limit('20');

            $grid->filter(function (Grid\Filter $filter) {
                $filter->equal('id');

            });
        });
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     *
     * @return Show
     */
    protected function detail($id)
    {
        return Show::make($id, new Subject(), function (Show $show) {
            $show->field('id');
            $show->field('serial');
            $show->field('unit')->as(function (){
                return sprintf('第%s联',$this->unit);
            });;
            $show->field('title','科目标题');
            $show->field('wiki');
            $show->field('created_at');
            $show->field('updated_at');
        });
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        return Form::make(new Subject(), function (Form $form) {
            $form->display('id');
            $form->select('serial','产品编号')->options((new Product())::all()->pluck('serial','serial'))->load('unit','api/product/unit');
            $form->select('unit','产品模型单元');
            $form->text('title','科目标题');
            $form->editor('wiki');
            $form->display('created_at');
            $form->display('updated_at');
        });
    }
}
