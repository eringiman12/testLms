<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
use App\Http\Controllers\LMS_Controller;

// Route::get('{any}', function () {
//     return view('app');
// })->where('any', '.*');

Route::get('/sample', [LMS_Controller::class, 'DB_get']);
Route::get('/company_process', [LMS_Controller::class, 'DB_get_process']);
Route::get('/New_regit', [LMS_Controller::class, 'Process_toroku']);
Route::get('/company_process_shosai', [LMS_Controller::class, 'DB_get_process_shosai']);
Route::get('/', [LMS_Controller::class, 'index'])->where('any', '.*');
