<?php

namespace App\Models;

use Dcat\Admin\Traits\HasDateTimeFormatter;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Subject
 *
 * @property int $id
 * @property string $serial 产品编号
 * @property int $unit 产品模型对应的联
 * @property string $wiki wiki
 * @property string $title 科目名称
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Subject newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Subject newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Subject query()
 * @method static \Illuminate\Database\Eloquent\Builder|Subject whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subject whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subject whereSerial($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subject whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subject whereUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subject whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subject whereWiki($value)
 * @mixin \Eloquent
 */
class Subject extends Model
{
	use HasDateTimeFormatter;
    protected $table = 'subject';
    
}
