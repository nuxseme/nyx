<?php

namespace App\Web\Controllers;

use Illuminate\Routing\Controller;
use App\Models\Report;
class ReportController extends Controller
{
    public function index()
    {
        return view('product');
    }

    public function info($serial)
    {
        $explain = new Report();
        return  $explain->where('serial',$serial)
            ->whereIn('unit',[1,2])->get();
    }
}
