<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->default('')->comment('产品标题');
            $table->string('image')->nullable()->comment('图片');
            $table->string('model')->nullable()->comment('产品对应的模型');
            $table->string('serial')->default('')->comment('产品编号');
            $table->integer('type')->default(1)->comment('模型类型');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
