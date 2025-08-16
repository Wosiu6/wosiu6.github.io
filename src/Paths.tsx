export abstract class Paths {
  static readonly HOMEPAGE = '/';

  static readonly ABOUT_ME = '/AboutMe';
  static readonly CV_DISPLAY = Paths.ABOUT_ME + '/CVDisplay';

  static readonly MISC_LIST = '/Misc';
  static readonly ABOUT_SITE = Paths.MISC_LIST + '/AboutSite';

  static readonly PORTFOLIO_LIST = '/Portfolio';
  static readonly SCREEN_LOCK_PROJECT = Paths.PORTFOLIO_LIST + '/ScreenLock';
  static readonly GAMES_API_PROJECT = Paths.PORTFOLIO_LIST + '/GamesApi';
  static readonly HLTB_PROJECT = Paths.PORTFOLIO_LIST + '/HLTB';
  static readonly BLAZOR_BALLS_PROJECT = Paths.PORTFOLIO_LIST + '/BlazorBalls';
  static readonly TAKEOUT_MERGER = Paths.PORTFOLIO_LIST + '/TakeoutMerger';
  static readonly PYTHON_SCRIPTS_PROJECT = Paths.PORTFOLIO_LIST + '/PythonScripts';

  static readonly PYTHON_EXTRACT_PHOTOS = Paths.PYTHON_SCRIPTS_PROJECT + '/ExtractPhotos';

  static readonly BASE = 'wosiu6.github.io';
}