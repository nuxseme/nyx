<?php

namespace App\Admin\Controllers;

use App\Models\Product;
use Dcat\Admin\Form;
use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use Dcat\Admin\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class ProductController extends AdminController
{
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Grid::make(new Product(), function (Grid $grid) {
            $grid->column('id')->sortable();
            $grid->column('title');
            $grid->column('image')->image('',100,100);
            $grid->column('model')->display(function (){
                return env('APP_URL').'/img/modes/'.$this->type.'.png';
            })->image('',100,100);
            $grid->column('serial');
            $grid->column('qrcode')->display(function() {
                if(env('APP_ENV') == 'product') {
                    //return QrCode::generate(env('APP_URL').'/web/product/'.$this->serial);
                    return env('APP_URL').'/web/product/'.$this->serial;
                }else{
                    return 'http://10.0.9.65/web/product/'.$this->serial;
                }
            });

//            $grid->column('查看释义列表')->display(function (){
//                $product_id = $this->id;
//                return '<a href="/admin/report/product_id/'.$product_id.'">结果详情</a>';
//            });
            //$grid->column('created_at');
            //$grid->column('updated_at')->sortable();

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
        return Show::make($id, new Product(), function (Show $show) {
            $show->field('id');
            $show->field('title');
            $show->field('image');
            $show->field('model');
            $show->field('serial');
            $show->field('type');
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
        return Form::make(new Product(), function (Form $form) {
            $form->display('id');
            $form->text('title');
            $form->image('image')->autoUpload();
            $form->text('type');
            $form->text('serial')->required();//todo 唯一性校验
        });
    }
}
