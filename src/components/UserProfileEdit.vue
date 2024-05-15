<template>
  <div class="profile-card">

    <p class="text-center">
        <img :src="activeUser.avatar" :alt="`${user.avatar} profile card`" class="avatar-xlarge img-update">
    </p>

    <div class="form-group">
        <input type="text" v-model="activeUser.username" placeholder="Username" class="form-input text-lead text-bold">
    </div>

    <div class="form-group">
        <input type="text" v-model="activeUser.name" placeholder="Full Name" class="form-input text-lead">
    </div>

    <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea class="form-input" id="user_bio" placeholder="Write a few words about yourself" v-model="activeUser.bio"/>
    </div>

    <div class="stats">
        <span>116 posts</span>
        <span>73 threads</span>
    </div>

    <hr>

    <div class="form-group">
        <label class="form-label" for="user_website">Website</label>
        <input autocomplete="off" class="form-input" id="user_website" value="batman.com">
    </div>

    <div class="form-group">
        <label class="form-label" for="user_email">Email</label>
        <input autocomplete="off" class="form-input" id="user_email" value="joker@batmail.com">
    </div>

    <div class="form-group">
        <label class="form-label" for="user_location">Location</label>
        <input autocomplete="off" class="form-input" id="user_location" value="You wish!">
    </div>

    <div class="btn-group space-between">
        <button class="btn-ghost">Cancel</button>
        <button type="submit" class="btn-blue">Save</button>
    </div>
</div>
</template>