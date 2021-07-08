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

    public function info($serial,$unit)
    {
        $index = [];
        foreach ($unit as $key=>$value) {
            $index[] = intval((($key+1).$value));
        }

        $subject = new Subject();
        $subjectData = array_column($subject->where('serial',$serial)->get()->toArray(),'unit');



        //todo 解析index
        $report = new Report();
        $reportData =  $report->where('serial',$serial)
            ->whereIn('index',[10,21])->get()->toArray();

        foreach ($reportData as  &$reportDatum) {
            $reportDatum['subject_title'] = $subjectData[$reportDatum['unit']]['title'];
            $reportDatum['wiki'] = $subjectData[$reportDatum['unit']]['wiki'];
        }
        
        return json_encode($reportData);

    }
}
