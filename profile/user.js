//
/****************************************************************************
 * Betterfox (modified)                                                     *
 * "Ad meliora"                                                             *
 * version: 126                                                             *
 * url: https://github.com/jackchatelain/hydrafox                           *
 * original url: https://github.com/yokoffing/Betterfox                     *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.jsbc_compression_level", 3);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("dom.security.sanitizer.enabled", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 1);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.search.suggest.enabled.private", false)
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.formfill.enable", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", false);

/** HTTPS-FIRST POLICY ***/
user_pref("dom.security.https_first", true);
user_pref("dom.security.https_first_schemeless", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.upgrade_display_content", true);
user_pref("security.mixed_content.upgrade_display_content.image", true);
user_pref("pdfjs.enableScripting", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** WEBRTC ***/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", true);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "data:;");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "data:;");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** DETECTION ***/
user_pref("captivedetect.canonicalURL", "data:;");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);

/** COOKIE BANNER HANDLING ***/
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/

/*** TWEAKS FROM FFPROFILE.COM ***/

user_pref("beacon.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.send_pings", false);
user_pref("browser.sessionstore.privacy_level", 0);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("device.sensors.ambientLight.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
user_pref("device.sensors.proximity.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.private-attribution.submission.enabled", false);
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.greasemonkey.stats.optedin", false);
user_pref("extensions.greasemonkey.stats.url", "");
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.webservice.discoverURL", "");
user_pref("media.autoplay.default", 0);
user_pref("media.autoplay.enabled", true);
user_pref("network.allow-experiments", false);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("privacy.donottrackheader.value", 1);
user_pref("privacy.query_stripping", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSite", false);
user_pref("signon.autofillForms", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("webgl.renderer-string-override", " ");
user_pref("webgl.vendor-string-override", " ");


/****************************************************************************
 * HYDRAFOX ADDITIONAL TWEAKS                                               *
****************************************************************************/

/** ADD FEATURES ***/
user_pref("browser.tabs.cardPreview.enabled", true);
user_pref("image.jxl.enabled", true);
user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", true);
user_pref("browser.profiles.enabled", true);
user_pref("cookiebanners.ui.desktop.enabled", true);
user_pref("browser.urlbar.clipboard.featureGate", true);
user_pref("browser.urlbar.showSearchTerms.featureGate", true);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", true);
user_pref("browser.ml.chat.hideLocalhost", false)
/** user_pref("browser.tabs.tooltipsShowPidAndActiveness", true) ***/
user_pref("browser.bookmarks.addedImportButton", true)

/** IMPROVE SPEED ***/
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.canvas.accelerated", true);
user_pref("dom.mutation-events.cssom.disabled", true)
user_pref("nglayout.initialpaint.delay", 0)
user_pref("nglayout.initialpaint.delay_in_oopif", 0)
user_pref("browser.urlbar.delay", 0)

/** IMPROVE PRIVACY ***/
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.bounceTrackingProtection.enabled", true);
user_pref("privacy.purge_trackers.enabled", true);
user_pref("privacy.query_stripping.enabled", true);
user_pref("network.trr.custom_uri", "https://dns.nextdns.io/");
user_pref("network.trr.uri", "https://dns.nextdns.io/");
user_pref("network.trr.mode", 2);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("privacy.trackingprotection.emailtracking.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("toolkit.telemetry.enabled", false);
// user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("browser.urlbar.quicksuggest.dataCollection.enabled", false)

/** IMPROVE SECURITY ***/
user_pref("security.tls.enable_kyber", true);

/** REMOVE ANNOYANCES ***/
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.promo.cookiebanners.enabled", false);
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.urlbar.suggest.pocket", false);

/*** DEVELOPMENT ***/
user_pref("devtools.command-button-measure.enabled", true)
user_pref("devtools.command-button-rulers.enabled", true)
user_pref("devtools.command-button-screenshot.enabled", true)
user_pref("devtools.inspector.showUserAgentStyles", false)
user_pref("devtools.dom.enabled", true)

/** OTHER ***/
user_pref("browser.translations.enable", false); /* Disable Firefox translation in favor of translate extension */
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); /* Allow dark reader on addons.mozilla.org */
user_pref("extensions.webextensions.restrictedDomains", accounts-static.cdn.mozilla.net,addons.cdn.mozilla.net,api.accounts.firefox.com,content.cdn.zilla.net,discovery.addons.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,sync.services.mozilla.com); /* Allow dark reader on some mozilla sites */
user_pref("browser.tabs.delayHidingAudioPlayingIconMS", 500);
user_pref("browser.urlbar.trimHttps", true);
user_pref("network.cookie.cookieBehavior.optInPartitioning", true);
user_pref("network.dns.preferIPv6", true);
user_pref("privacy.userContext.enabled", true)
user_pref("privacy.userContext.ui.enabled", true)
user_pref("privacy.reduceTimerPrecision", true)
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false)
user_pref("dom.webgpu.enabled", true)
user_pref("identity.fxaccounts.enabled", true)
user_pref("network.dns.disableIPv6", false)
user_pref("network.dns.ipv4OnlyDomains", "ipv4.example.com")
user_pref("network.http.http3.enable", true)
user_pref("font.default.x-western", "sans-serif")
user_pref("doh-rollout.provider-list", '[{"UIName":"NextDNS","uri":"https://dns.nextdns.io/"},{"UIName":"AhaDNS","uri":"https://blitz.ahadns.com/"},{"UIName":"Cloudflare","uri":"https://mozilla.cloudflare-dns.com/dns-query"},{"UIName":"Quad9","uri":"https://dns.quad9.net/dns-query"},{"UIName":"OpenDNS","uri":"https://doh.opendns.com"},{"UIName":"IIJ (Japan)","uri":"https://public.dns.iij.jp/dns-query"},{"UIName":"CIRA (Canada)","uri":"https://https://canadianshield.cira.ca/dns-query"},{"UIName":"DNS.SB (Germany)","uri":"https://doh.dns.sb"},{"UIName":"Andrews & Arnold (UK)","uri":"https://dns.aa.net.uk/dns-query"}]')
user_pref("services.sync.addons.trustedSourceHostnames", "addons.mozilla.org, gnuzilla.gnu.org") /* Trust addons from https://gnuzilla.gnu.org/mozzarella/ */
user_pref("widget.macos.native-context-menus", true) /* Set to false if using a userChrome.css theme that changes context menus */

/** LIBREWOLF (SACRIFICE PRIVACY FOR FUNCTIONALITY) ***/
user_pref("privacy.resistFingerprinting", false);
user_pref("webgl.disabled", false)
user_pref("security.OCSP.require", false)

/*** FLOORP ***/
user_pref("floorp.browser.sidebar.useIconProvider", "duckduckgo")
user_pref("floorp.browser.workspace.showWorkspaceName", false)
user_pref("floorp.browser.workspaces.enabled", true)
user_pref("floorp.download.notification", 4)
user_pref("floorp.user.js.customize", "") /* Prevent these tweaks from being automatically overridden */

/*** WATERFOX ***/
user_pref("browser.theme.enableWaterfoxCustomizations", 0)
user_pref("userChrome.autohide.forward_button", true)
user_pref("userChrome.hidden.bookmarkbar_label", true)
user_pref("userChrome.icon.global_menu.mac", true)
user_pref("userChrome.padding.drag_space", true)
user_pref("userChrome.panel.full_width_separator", true)
user_pref("userChrome.panel.remove_strip", true)
user_pref("userChrome.rounding.square_tab", false)
user_pref("userChrome.tab.bottom_rounded_corner", true)
user_pref("userChrome.tab.photon_like_contextline", false)
user_pref("userChrome.tab.squareTabCorners", false)
user_pref("userChrome.theme.transparent.menu", true)
user_pref("userChrome.theme.transparent.panel", true)

/*** GNU ICECAT ***/
user_pref("browser.tabs.icecat-view", false)
