'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-github-users documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RepositoriesModule.html" data-type="entity-link" >RepositoriesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RepositoriesModule-abc2c2571f6f949db47b3b2d03e4ac8b7ab7284bac653bd7173d8abbcba38d48354953c98a648750531d521646607dfdfb78fd9e768eb0c36b2b672adb37c417"' : 'data-bs-target="#xs-injectables-links-module-RepositoriesModule-abc2c2571f6f949db47b3b2d03e4ac8b7ab7284bac653bd7173d8abbcba38d48354953c98a648750531d521646607dfdfb78fd9e768eb0c36b2b672adb37c417"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RepositoriesModule-abc2c2571f6f949db47b3b2d03e4ac8b7ab7284bac653bd7173d8abbcba38d48354953c98a648750531d521646607dfdfb78fd9e768eb0c36b2b672adb37c417"' :
                                        'id="xs-injectables-links-module-RepositoriesModule-abc2c2571f6f949db47b3b2d03e4ac8b7ab7284bac653bd7173d8abbcba38d48354953c98a648750531d521646607dfdfb78fd9e768eb0c36b2b672adb37c417"' }>
                                        <li class="link">
                                            <a href="injectables/RepositoriesApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepositoriesApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RepositoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepositoriesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RepositoryApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepositoryApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RepositoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepositoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-a09cf830aace6f0442b88de090600d3b2dc6f026a82be81734f63bd06b36c0eaca857d9232c92fed11f4cc53c22c4f5ddd396c8b97038b64d43a3fc1f4fb24d9"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-a09cf830aace6f0442b88de090600d3b2dc6f026a82be81734f63bd06b36c0eaca857d9232c92fed11f4cc53c22c4f5ddd396c8b97038b64d43a3fc1f4fb24d9"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-a09cf830aace6f0442b88de090600d3b2dc6f026a82be81734f63bd06b36c0eaca857d9232c92fed11f4cc53c22c4f5ddd396c8b97038b64d43a3fc1f4fb24d9"' :
                                            'id="xs-pipes-links-module-SharedModule-a09cf830aace6f0442b88de090600d3b2dc6f026a82be81734f63bd06b36c0eaca857d9232c92fed11f4cc53c22c4f5ddd396c8b97038b64d43a3fc1f4fb24d9"' }>
                                            <li class="link">
                                                <a href="pipes/AtobTextPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtobTextPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SafeHtmlPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeHtmlPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepositoriesComponent.html" data-type="entity-link" >RepositoriesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepositoriesLayoutComponent.html" data-type="entity-link" >RepositoriesLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepositoryDetailComponent.html" data-type="entity-link" >RepositoryDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchComponent.html" data-type="entity-link" >SearchComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/NgUnsubscriber.html" data-type="entity-link" >NgUnsubscriber</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RepositoriesApiService.html" data-type="entity-link" >RepositoriesApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RepositoriesService.html" data-type="entity-link" >RepositoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RepositoryApiService.html" data-type="entity-link" >RepositoryApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RepositoryService.html" data-type="entity-link" >RepositoryService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Commit.html" data-type="entity-link" >Commit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommitAuthor.html" data-type="entity-link" >CommitAuthor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommitAuthorClass.html" data-type="entity-link" >CommitAuthorClass</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommitClass.html" data-type="entity-link" >CommitClass</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/License.html" data-type="entity-link" >License</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Links.html" data-type="entity-link" >Links</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Owner.html" data-type="entity-link" >Owner</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Readme.html" data-type="entity-link" >Readme</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Repository.html" data-type="entity-link" >Repository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchRepositoriesResponse.html" data-type="entity-link" >SearchRepositoriesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tree.html" data-type="entity-link" >Tree</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Verification.html" data-type="entity-link" >Verification</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});