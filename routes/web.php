<?php

use App\Http\Controllers\FinanceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/orders', function () {
    return Inertia::render('orders');
})->middleware(['auth', 'verified'])->name('orders');


Route::middleware('auth')->group(function () {
    // HOME
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    // NEWS
    Route::get('/news', [HomeController::class, 'getNews'])->name('news');

    // FINANCE ROUTES
    Route::prefix('/finance')->group(function () {
        // DASHBOARD
        Route::get('/dashboard', function () {
            return Inertia::render('finance/finance-dashboard');
        })->name('finance.dashboard');
    });

    // FINANCE ROUTES
    Route::prefix('/finance')->group(function () {
        // FATURAS
        Route::get('/invoices', [FinanceController::class, 'invoicePage'])->name('finance.invoices');
    });

    // FINANCE ROUTES
    Route::prefix('/finance')->group(function () {
        // Conta Corrente
        Route::get('/current-account', [FinanceController::class, 'currentAccountPage'])->name('finance.current-account');
        Route::get('/current-account/all', [FinanceController::class, 'getAllCurrentAccount'])->name('finance.current-account.all');
    });

    // FINANCE ROUTES
    Route::prefix('/finance')->group(function () {
        // FATURAS
        Route::get('/receipts', function () {
            return Inertia::render('finance/receipts');
        })->name('finance.receipts');
    });
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
