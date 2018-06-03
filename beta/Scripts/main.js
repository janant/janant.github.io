var isMenuVisible = false
var isRegularLayout = false

// Expands and collapses the menu, with animation
function toggleCompactNavigationDisplay() {
  var style = getComputedStyle(document.body)
  var targetHeight;

  // Gets appropriate height for the navigation bar
  if (isMenuVisible) {
    targetHeight = style.getPropertyValue('--compactCollapsedDropDownHeight').trim()
    $('#compactNavigationDisplayButton').attr('src', 'Images/chevron-down.svg')
    $('#compactNavigationExpandButtonContainer').css('bottom', '6px')
  }
  else {
    targetHeight = style.getPropertyValue('--compactExpandedDropDownHeight').trim()
    $('#compactNavigationDisplayButton').attr('src', 'Images/chevron-up.svg')
    $('#compactNavigationExpandButtonContainer').css('bottom', '8px')
  }
  isMenuVisible = !isMenuVisible

  // Animates the transition over 0.3 seconds
  $('#navigationDropDownMenu').animate({
    height: targetHeight
  }, 300);
}

// Functions called when the window resizes
// Determines if mobile or desktop layout and makes appropriate callback
function handleResize() {
  if ($(window).width() > 650 && !isRegularLayout) {
    isRegularLayout = true
    setupForRegular()
  }
  else if ($(window).width() <= 650 && isRegularLayout) {
    isRegularLayout = false
    setupForCompact()
  }
}

// Callback when the website becomes compact layout (mobile)
function setupForCompact() {
  /* Shows button for navigation display */
  $('#navigationDropDownMenu').css('height', 'var(--compactCollapsedDropDownHeight)')

  /* Shows appropriate image/positioning for navigation display button */
  $('#compactNavigationDisplayButton').attr('src', 'Images/chevron-down.svg')
  $('#compactNavigationExpandButtonContainer').css('bottom', '6px')
}

// Callback when the website becomes regular layout (desktop)
function setupForRegular() {
  /* If the menu is visible, collapse it */
  if (isMenuVisible) {
    isMenuVisible = false
  }
  $('#navigationDropDownMenu').css('height', 'var(--regularDropDownHeight)')
}

$(document).ready(function() {
  // Sets up window resizing callbacks
  handleResize()
  $(window).resize(handleResize)

  // If blurring not available for navigation bar, fall back to whiter background
  if ($("div#navigationBar").css("-webkit-backdrop-filter") == null) {
		$("div#navigationBar").css({"background-color": "rgba(255, 255, 255, 0.99)"});
	}

  // Sets up shadow below navigation bar when scrolling beyond the top
	$(window).on("scroll", function() {
		if ($(window).scrollTop() > 3) {
			$("div#navigationBar").css({"box-shadow": "0px 1px 1px #EEEEEE"});
		}
		else {
			$("div#navigationBar").css({"box-shadow": "initial"});
		}
	});
})
