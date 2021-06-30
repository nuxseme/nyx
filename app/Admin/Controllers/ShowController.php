<?php

namespace App\Admin\Controllers;


use Illuminate\Routing\Controller;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class ShowController extends Controller
{
    public function info($product_id)
    {
//        $product = (new Product())->where('id',$product_id)->first();
//
//        return response()->json([
//            'product_id' => $product->id,
//            'title' => $product->title,
//            'image' => Storage::disk(config('admin.upload.disk'))->url($product->image),
//            'serial' => $product->serial,
//            'create_at' =>  $product->created_at,
//            'update_at' => $product->updated_at
//        ]);

        return view('index');

    }
}
