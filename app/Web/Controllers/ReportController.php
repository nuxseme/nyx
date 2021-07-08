<?php

namespace App\Web\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Report;
use App\Models\Subject;

class ReportController extends Controller
{
    public function index()
    {
        return view('product');
    }

    public function info()
    {
        $serial = request()->get('serial');
        $unit = json_decode(request()->get('unit'),true);
        $index = [];

        foreach ($unit as $key=>$value) {
            $index[] = intval(($key.$value));
        }
        $subject = new Subject();
        $subjectData = array_column($subject->where('serial',$serial)->get()->toArray(),null,'unit');

        //todo 解析index
        $report = new Report();
        $reportData =  $report->where('serial',$serial)
            ->whereIn('index',$index)->get()->toArray();

        foreach ($reportData as  &$reportDatum) {
            $reportDatum['subject_title'] = $subjectData[$reportDatum['unit']]['title'] ?? '';
            $reportDatum['wiki'] = $subjectData[$reportDatum['unit']]['wiki'] ?? '';
        }

        return response()->json($reportData);

    }
}
