<?php

namespace App\Admin\Controllers;

use App\Admin\Repositories\Explain;
use App\Models\Product;
use Dcat\Admin\Form;
use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use Dcat\Admin\Http\Controllers\AdminController;

class ExplainController extends AdminController
{
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Grid::make(new Explain(), function (Grid $grid) {
            $grid->column('id')->sortable();
            $grid->column('product_title','产品标题')->display(function (){
                return Product::where('id',$this->product_id)->first()->title;
            });
            $grid->column('info');
            $grid->column('suggest');
            $grid->column('created_at');
            $grid->column('updated_at')->sortable();

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
        return Show::make($id, new Explain(), function (Show $show) {
            $show->field('id');
            $show->field('info');
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
        return Form::make(new Explain(), function (Form $form) {
            $form->display('id');
            $form->text('product_id');
            $form->editor('info');
            $form->text('suggest');

            $form->display('created_at');
            $form->display('updated_at');
        });
    }
}
