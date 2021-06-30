<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExplainTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('explain', function (Blueprint $table) {
            $table->id();
            $table->integer('product_id')->comment('关联产品id');
            $table->longText('suggest')->comment('建议');
            $table->longText('info')->comment('结果解释');
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
        Schema::dropIfExists('explain');
    }
}
