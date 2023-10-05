 @extends('layouts.app')
 @section('content')
 <div class="container">
     <div class="card chat-container">
         <div class="card-header">Chat</div>
         <div class="card-body">
             <chat-messages :messages="messages" :user="{{ Auth::user() }}"></chat-messages>
         </div>
         <div class="card-footer">
            @if (Auth::user())
              <chat-form v-on:messagesent="addMessage" :user="{{ Auth::user() }}" :message="''"></chat-form>
            @else
              <a href="{{ route('login') }}" class="login-advice">Log in to chat</a>
            @endif
         </div>
     </div>
 </div>
 @endsection
 