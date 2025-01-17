<?php

use Illuminate\Support\Facades\Route;

// Associatable Resources...
Route::get('/{resource}/associatable/{field}', 'AssociatableController@index');

// Computed field
Route::post('/{resource}/computed/{field}', 'ComputedController@index');

// Download file inside of Row field
Route::get('/{resource}/{resourceId}/download/{field}', 'FieldDownloadController@show');

Route::get('/options/{resource}', 'OptionsController@index');