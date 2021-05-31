<template>
  <div :uid="uid" v-show="mainButtons['scan-save']" class="dews-mobile-scan"></div>
</template>

<script>
import CreateService from "@/service/CreateService";
import {mapGetters} from "vuex";

export default {
  name: 'scan-button',
  data() {
    return {
      uid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('btn-scan');
  },
  computed: {
    ...mapGetters({
      mainButtons: "getMainButtons"
    }),
  }
}
</script>

<style>
.dews-mobile-scan {
  display: inline-block;
  min-width: 24px;
  min-height: 24px;
  max-width: 24px;
  max-height: 24px;
  width: 24px;
  height: 24px;
  margin-right: 24px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJpY19idGJfc2Nhbl90ZXJfbWQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0ze2ZpbGw6I2ZmZn0KICAgICAgICA8L3N0eWxlPgogICAgPC9kZWZzPgogICAgPGcgaWQ9ImljIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOSAxKSI+CiAgICAgICAgPHBhdGggaWQ9IuygleyCrOqwge2YlSIgZD0iTTkwMzEgMTk3MzhoLTV2LTJoNWExIDEgMCAwIDAgMS0xdi01aDJ2NWEzIDMgMCAwIDEtMyAzem0tMTEgMGgtNWEzLjAwNiAzLjAwNiAwIDAgMS0zLTN2LTVoMnY1YTEgMSAwIDAgMCAxIDFoNXYyem0xNC0xNGgtMnYtNWExIDEgMCAwIDAtMS0xaC01di0yaDVhMyAzIDAgMCAxIDMgM3Y1em0tMjAgMGgtMnYtNWEzIDMgMCAwIDEgMy0zaDV2MmgtNWExIDEgMCAwIDAtMSAxdjV6IiBjbGFzcz0iY2xzLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MDQwIC0xOTcxNikiLz4KICAgICAgICA8cGF0aCBpZD0i7ZWp7LmY6riwIiBkPSJNNjM5NiAxOTM2NmExIDEgMCAwIDEtMSAxaC0yMGExIDEgMCAwIDEgMC0yaDIwYTEgMSAwIDAgMSAxIDF6IiBjbGFzcz0iY2xzLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NDAyIC0xOTM1NSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==");
}
</style>
