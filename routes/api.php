<?php

// Route for Question
Route::apiResource('/question', 'QuestionController');

// Route for Category
Route::apiResource('/category', 'CategoryController');

// Route for Replies
Route::apiResource('/question/{question}/reply', 'ReplyController');

// Route for Like
Route::post('/like/{reply}', 'LikeController@likeIt');
Route::delete('/like/{reply}', 'LikeController@unLikeIt');

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});