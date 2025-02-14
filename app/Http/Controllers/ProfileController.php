<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Shared\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

final class ProfileController extends Controller
{

    public function __construct()
    {
    }

    public function show()
    {
        $client = Auth::user()->url_name;

        return view('profile.show', compact('client'));
    }

    public function updateLogo($client, $url): void
    {
        dd($url);
        $this->repository->updateProfile('logo', $url);
    }

    public function updatePhoto($client, $url): void
    {
        $this->repository->updateProfile('login_image', $url);
    }
}
