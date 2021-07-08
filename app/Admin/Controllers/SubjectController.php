<?php

namespace App\Admin\Controllers;

use App\Admin\Repositories\Subject;
use Dcat\Admin\Form;
use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use Dcat\Admin\Http\Controllers\AdminController;

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
            $grid->column('id')->sortable();
            $grid->column('serial');
            $grid->column('unit');
            $grid->column('title');
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
            $show->field('unit');
            $show->field('title');
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
            $form->text('serial');
            $form->text('unit');
            $form->text('title');
            $form->editor('wiki');
            $form->display('created_at');
            $form->display('updated_at');
        });
    }
}
