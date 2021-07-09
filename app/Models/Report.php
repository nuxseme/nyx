<?php

namespace App\Models;

use Dcat\Admin\Traits\HasDateTimeFormatter;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Report
 *
 * @property int $id
 * @property int $serial 关联产品id
 * @property int $unit 产品模型单元
 * @property int $sign 指示标识
 * @property string $sign_info 指示说明
 * @property int $index 索引
 * @property string|null $suggest 建议
 * @property string|null $info 结果解释
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Report newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Report newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Report query()
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereIndex($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereInfo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereSerial($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereSign($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereSignInfo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereSuggest($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Report extends Model
{
	use HasDateTimeFormatter;
    protected $table = 'report';

}
