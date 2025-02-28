<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use App\Shared\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

final class ProfileController extends Controller
{
    public function __construct() {}

    public function show()
    {
        //
    }

    public function edit(): Response
    {
        return Inertia::render(
            'Profile/Edit',
        );
    }

    public function updateLogo($client, $url): void
    {
        $this->updateProfile('logo', $url);
    }

    public function updatePhoto($client, $url): void
    {
        $this->updateProfile('login_image', $url);
    }

    public function updateProfile(string $field, string $imageUrl)
    {
        return User::updateOrCreate(
            ['id' => Auth::id()],
            [$field => $imageUrl]
        );

    }
}
