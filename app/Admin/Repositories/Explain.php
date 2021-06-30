<?php

namespace App\Admin\Repositories;

use App\Models\Explain as Model;
use Dcat\Admin\Repositories\EloquentRepository;

class Explain extends EloquentRepository
{
    /**
     * Model.
     *
     * @var string
     */
    protected $eloquentClass = Model::class;
}
