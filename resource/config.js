var ZOTERO_CONFIG = {
	GUID: 'zotero@chnm.gmu.edu',
	DB_REBUILD: false, // erase DB and recreate from schema
	REPOSITORY_URL: 'https://gator3143.hostgator.com/~fbennett/cgi-bin',
	REPOSITORY_CHECK_INTERVAL: 86400, // 24 hours
	REPOSITORY_RETRY_INTERVAL: 3600, // 1 hour
	BASE_URI: 'http://zotero.org/',
	WWW_BASE_URL: 'https://www.zotero.org/',
	PROXY_AUTH_URL: 'https://s3.amazonaws.com/zotero.org/proxy-auth',
	SYNC_URL: 'https://sync.zotero.org/',
	API_URL: 'https://api.zotero.org/',
	API_VERSION: 2,
	PREF_BRANCH: 'extensions.zotero.',
	BOOKMARKLET_ORIGIN: 'https://www.zotero.org',
	HTTP_BOOKMARKLET_ORIGIN: 'http://www.zotero.org',
	BOOKMARKLET_URL: 'https://www.zotero.org/bookmarklet/',
	VERSION: '4.0.24.1.SOURCE'
};

EXPORTED_SYMBOLS = ["ZOTERO_CONFIG"];
