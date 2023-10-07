 @extends('layouts.app')
 @section('content')
 <div class="container">
     <div class="card chat-container">
         <div class="card-header">Chat</div>
         <div class="card-body">
            @if ( Auth::user() )
              <chat-messages :messages="messages" :user="{{ Auth::user() }}"></chat-messages>
            @else
              <chat-messages :messages="messages" :user="null"></chat-messages>
            @endif
             
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
 