<?php

namespace App\Web\Controllers;

use Illuminate\Routing\Controller;
use App\Models\Report;
use App\Models\Subject;
class ReportController extends Controller
{
    public function index()
    {
        return view('product');
    }

    public function info($serial)
    {
        $wiki = new Subject();
        $data = $wiki->where('serial',$serial)
        ->whereIn('unit',[1,2])->get()->toArray();



        $explain = new Report();
        return  $explain->where('serial',$serial)
            ->whereIn('unit',[1,2])->get();
    }
}
