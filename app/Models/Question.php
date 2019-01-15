<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Question extends Model
{
    // This method old school, imagine if you have so many field and you put that one by one. So we are going to use protected $guarded
    // protected $fillable = [
    //     'title',
    //     'slug',
    //     'body',
    //     'category_id',
    //     'user_id'
    // ];

    // New method using protected $guarded
    protected $guarded = [];

    public function getRouteKeyName()
    {
        return ('slug');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getPathAttribute()
    {
        return asset("api/question/$this->slug");
    }
}
