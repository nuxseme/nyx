<?php

namespace App\Admin\Controllers;

use App\Models\Product;
use Dcat\Admin\Form;
use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use Dcat\Admin\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Config;
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
            $grid->model()->orderBy('serial');
            $grid->model()->orderBy('type');
            //$grid->column('id')->sortable();
            $grid->number('序号');
            $grid->column('title')->limit('20');;
            $grid->column('image')->image('',100,100);
            $grid->column('model')->display(function (){
                return env('APP_URL').'/img/modes/'.$this->type.'.png';
            })->image('',100,100);
            $grid->column('serial');
            if(env('APP_ENV') == 'sandbox' || env('APP_ENV') == 'local') {

                $grid->column('qrcode_link')->display(function (){
                    return env('APP_URL').'/web/product/'.$this->serial;
                    //return 'http://192.168.1.102/web/product/'.$this->serial;
                })->link();
            }

            $grid->column('qrcode')->display(function() {
                return QrCode::size(50)->generate(env('APP_URL').'/web/product/'.$this->serial);
            });
//            $grid->column('qrcode')->display(function() {
//                return QrCode::size(50)->generate('http://192.168.1.102/web/product/'.$this->serial);
//            });

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
            $show->field('model')->as(function (){
                return env('APP_URL').'/img/modes/'.$this->type.'.png';
            })->image('',100,100);
            $show->field('serial');
            $show->field('type','模型类型');
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
            $form->select('type','模型类型')->options(function (){

                 $modes = array_keys(Config::get('constants.mode'));

                 $result = [];

                 foreach ($modes as  $mode) {
                     $result[$mode] = '模型'.$mode;
                 }

                 return $result;

            });
            $form->text('serial')->required();//todo 唯一性校验
        });
    }
}
