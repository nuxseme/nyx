<?php

namespace App\Admin\Controllers;


use Illuminate\Routing\Controller;
use App\Models\Explain;

class ReportController extends Controller
{
    public function info($product_id,$explain_id)
    {
        $explain = new Explain();
        return  $explain->where('id',$explain_id)->first();
    }
}
