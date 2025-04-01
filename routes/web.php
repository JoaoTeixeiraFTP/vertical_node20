<?php

use App\Http\Controllers\FinanceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SupportController;
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
})->middleware(['auth'])->name('orders');

Route::middleware(['auth:sanctum', 'auth'])->get('/support', [SupportController::class, 'supportPage'])->name('support');
    Route::prefix('/support')->group(function () {
        Route::get('/document/{document}/{id}', [SupportController::class, 'documentPage'])->name('support.documents');
        Route::get('/chat', [SupportController::class, 'chatPage'])->name('support.chat.chat'); 
        //Route::get('/chat/{document}/{id}', [SupportController::class, 'chatPage'])->name('support.chat.chat');
    });

Route::middleware('auth')->group(function () {
    // HOME
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    // NEWS
    Route::get('/news', [HomeController::class, 'getNews'])->name('news');

    // FINANCE ROUTES
    Route::prefix('/finance')->group(function () {
        // DASHBOARD
        Route::get('/dashboard', [FinanceController::class, 'index'])->name('finance.dashboard');

        // FATURAS
        Route::get('/invoices', [FinanceController::class, 'invoicePage'])->name('finance.invoices');
        // Conta Corrente
        Route::get('/current-account', [FinanceController::class, 'currentAccountPage'])->name('finance.current-account');
        Route::get('/current-account/all', [FinanceController::class, 'getAllCurrentAccount'])->name('finance.current-account.all');
        // Recibos
        Route::get('/receipts', [FinanceController::class, 'receiptsPage'])->name('finance.receipts');

        // Não Regularizado
        Route::get('/notregularized', [FinanceController::class, 'notregularizedPage'])->name('finance.notregularized');

        Route::get('/document/{document}/{id}', [FinanceController::class, 'documentPage'])->name('finance.documents');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
