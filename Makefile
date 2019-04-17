all: build-backend

.PHONY: Build Plone 5.2
build-backend:  ## Build Plone 5.2
	(cd api && virtualenv --clear --python=python3 .)
	(cd api && bin/pip install --upgrade pip)
	(cd api && bin/pip install -r requirements.txt)
	(cd api && bin/buildout -c plone-5.2.x.cfg)

test-acceptance:
	PYTHONPATH=$(pwd)/tests ZSERVER_PORT=55001 api/bin/pybot -v API:Plone -v BROWSER:headlesschrome tests

test-acceptance-guillotina:
	PYTHONPATH=$(pwd)/tests pybot -v BROWSER:headlesschrome -v API:Guillotina tests;

.PHONY: all test-acceptance
