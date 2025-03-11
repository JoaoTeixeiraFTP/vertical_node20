<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Api\Support;
use App\Shared\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

final class SupportController extends Controller
{
    public function __construct() {}

    /**
     * Show the application dashboard.
     */
    public function index(): Response
    {
    }

    /**
     * Show the application dashboard.
     */


     public function supportPage(): Response
     {
         $page = request()->input('page', 1);
         $per_page = request()->input('per_page', 15);
         
         $user = Auth::user();
     
     
         try {
             $supportData = Support::fetch()
                 ->token($user->get_subscriber->access_token)
                 ->no($user->no)
                 ->paginate(perPage: $per_page, page: (int) $page)
                 ->wait(); 
     
     
             // Retorna os dados e o log para o frontend
             return Inertia::render('support', [
                 'support' => $supportData,
                 'logs' => ['Dados recebidos com sucesso']
             ]);
         } catch (\Exception $e) {
     
             return Inertia::render('support', [
                 'support' => [],
                 'logs' => ['Erro ao buscar dados de suporte']
             ]);
         }
     }   

     public function documentPage($document, $id): Response
     {
         if ($document !== 'support') {
             return Inertia::render('support/document/support-document', [
                 'document' => null,
                 'logs' => ['Tipo de documento inválido.'],
             ]);
         }
     
         try {
             $fetch = Support::fetch()
                 ->pastamp($id)
                 ->token(Auth::user()->get_subscriber->access_token)
                 ->get()
                 ->wait();
     
             return Inertia::render('support/document/support-document', [
                 'document' => $fetch,
             ]);
         } catch (\Exception $e) {
             return Inertia::render('support/document/support-document', [
                 'document' => null,
                 'logs' => ['Erro ao buscar documento de suporte.'],
             ]);
         }
     }       
}
