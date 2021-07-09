<?php
namespace App\Admin\Controllers\Api;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Config;

class ProductController extends Controller
{
    public function unit(Request $request)
    {
        $serial = $request->get('q');
        $product = Product::where('serial',$serial)->first('type');
        $unit = Config::get('constants.mode.'.$product->type);

        $data = [];

        foreach ($unit as $value) {
            $data[] = [
                'id' => $value,
                'text' => $value
            ];
        }

        return response()->json($data);
    }
}
