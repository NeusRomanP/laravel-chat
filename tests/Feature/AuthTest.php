<?php

namespace Tests\Feature;

use App\Models\Message;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthTest extends TestCase
{

    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_unautenticated_user_cant_send_messages(): void
    {
        $user = User::factory()->create();
        $message = $user->messages()->create([
            'message' => 'Hola'
        ]);

        $response = $this->actingAs($user)->post('/messages', [
            'message' => $message->message
        ]);

        $response->assertStatus(200);
    }
}
