player.onChat("", function () {
	
})
player.onItemInteracted(DIAMOND_SWORD, function () {
    music.playNote(659, Instrument.HiHat, music.beat(BeatFraction.Double))
})
