<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class ChatsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('chat');
    }

    public function fetchMessages()
    {
        return Message::with('user')->get();
    }

    public function sendMessage(Request $request)
    {
        $user = Auth::user();
        $message = $user->messages()->create([
            'message' => $request->input('message')
        ]);

        broadcast(new MessageSent($user, $message))->toOthers();

        $this->deleteOldMessages();

        return ['status' => 'Message Sent!'];
    }

    public function deleteOldMessages(){
        $messages = Message::all();
        $lastsMessages = Message::latest()->take(25)->get('id');
        Log::Debug($lastsMessages);
        Message::whereNotIn('id', $lastsMessages)->delete();
    }
}
