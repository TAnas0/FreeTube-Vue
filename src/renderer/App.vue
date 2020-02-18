<template>
  <div id="app">
    <div class="etabs-tabgroup">
      <div class="etabs-tabs" />
      <div class="etabs-buttons" />
    </div>
    <div class="etabs-views" />
    <top-nav ref="topNav" />
    <side-nav ref="sideNav" />
    <Transition
      mode="out-in"
      name="slide-up"
    >
      <!-- <keep-alive> -->
      <RouterView
        ref="router"
        class="routerView"
        :class="{ expand: !isOpen }"
      />
      <!-- </keep-alive> -->
    </Transition>
  </div>
</template>

<script src="./App.js" />

<style src="./themes.css" />
<style src="./videoJS.css" />
<style scoped src="./App.css" />
<style src="./tabs.css" />
