<?php

namespace App\Admin\Controllers;

use App\Models\Product;
use App\Models\Report;
use Dcat\Admin\Form;
use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use Dcat\Admin\Http\Controllers\AdminController;

class ReportController extends AdminController
{
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Grid::make(new Report(), function (Grid $grid) {
            $grid->column('id')->sortable();
            $grid->column('product_title','产品标题')->display(function (){
                return Product::where('serial',$this->serial)->first()->title;
            });
            $grid->column('unit');
            $grid->column('info')->display(function (){
                return strip_tags($this->info);
            })->limit('20');
            $grid->column('created_at');
            $grid->column('updated_at')->sortable();

            $grid->filter(function (Grid\Filter $filter) {
                $filter->equal('id','报告ID');
                $filter->equal('serial','产品编号');
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
        return Show::make($id, new Report(), function (Show $show) {
            $show->field('id');
            $show->field('serial');
            $show->field('unit');
            $show->info('结果描述')->unescape();
            $show->field('suggest');
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
        return Form::make(new Report(), function (Form $form) {
            $form->display('id');
            $form->text('serial','产品编号');
            $form->text('unit','产品模型单元');
            $form->editor('info');
            $form->editor('suggest');
            $form->editor('wiki');
            $form->display('created_at');
            $form->display('updated_at');
        });
    }
}
