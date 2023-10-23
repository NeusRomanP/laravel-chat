<?php

namespace Tests\Feature;

use App\Events\MessageSent;
use App\Models\Message;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class MessagesTest extends TestCase
{

    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_redirects_to_homepage(): void
    {

        $user = User::create([
            'name' => 'Neus',
            'email' => 'neus@gmail.com',
            'password' => Hash::make('12345678')
        ]);

        $user->messages()->create([
            'message' => 'Hola'
        ]);

        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_message_is_broadcasted(): void
    {

        //$this->withoutExceptionHandling();

        $user = User::create([
            'name' => 'Neus',
            'email' => 'neus@gmail.com',
            'password' => Hash::make('12345678')
        ]);

        $message = $user->messages()->create([
            'message' => 'Hola'
        ]);

        Event::fake();

        broadcast(new MessageSent($user, $message))->toOthers();
        
        Event::assertDispatched(MessageSent::class, function ($e) use ($message) {
            return $e->message->message == $message->message;
        });

        //Event::assertDispatched(MessageSent::class);

        //$response = $this->get('/messages');

        //$response->assertStatus(200);
       
    }
}
