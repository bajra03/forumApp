<?php

// Route for Question
Route::apiResource('/question', 'QuestionController');

// Route for Category
Route::apiResource('/category', 'CategoryController');

// Route for Replies
Route::apiResource('/question/{question}/reply', 'ReplyController');