 @extends('layouts.app')
 @section('content')
 <div class="container">
     <div class="card">
         <div class="card-header">Chats</div>
         <div class="card-body">
             <chat-messages :messages="messages" :user="{{ Auth::user() }}"></chat-messages>
         </div>
         <div class="card-footer">
             <chat-form v-on:messagesent="addMessage" :user="{{ Auth::user() }}" :message="''"></chat-form>
         </div>
     </div>
 </div>
 @endsection
 