<template>
<div class="mm-sidebar  sidebar-default ">
	<div class="mm-sidebar-logo d-flex align-items-center justify-content-between">
		<router-link :to="{name: 'layout.dashboard1'}" class="header-logo"> <img :src="sidelogo" class="img-fluid rounded-normal" alt="logo"> </router-link>
		<div class="side-menu-bt-sidebar" @click="miniSidebar"> <i class="las la-bars wrapper-menu"></i> </div>
	</div>
	<div class="data-scrollbar" data-scroll="1" id="sidebar-scrollbar">
		<nav class="mm-sidebar-menu">
			<ul id="mm-sidebar-toggle" class="side-menu">
				<li :class="checkActive(dashboards) ? 'active' : ''">
					<a v-b-toggle.Dashboards class="svg-icon"> <i class="">
                            <svg class="svg-icon" id="mm-dash" width="20" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </i> <span class="ml-2">Dashboards</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
					<b-collapse @shown="showCollapse('Dashboards')" @hide="hideCollapse" tag="ul" id="Dashboards" class="submenu" accordion="my-accordion" :visible="checkActive(dashboards)">
						<li :class="checkActive('layout.dashboard1') ? 'active' : ''" >
							<router-link :to="{ name: 'layout.dashboard1'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-dash-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </i> <span>Dashboard 1</span> </router-link>
						</li>
						<li :class="checkActive('layout.dashboard2') ? 'active' : ''">
							<router-link :to="{name: 'layout.dashboard2'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-dash-2" width="20" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                </i> <span>Dashboard 2</span> </router-link>
						</li>
						<li :class="checkActive('layout.dashboard3') ? 'active' : ''">
							<router-link :to="{name: 'layout.dashboard3'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-dash-3" width="20" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                    </svg>
                                </i> <span>Dashboard 3</span> </router-link>
						</li>
					</b-collapse>
				</li>
				<li :class="checkActive(pages.concat(app,user)) ? 'active' : ''">
					<a v-b-toggle.app class="svg-icon"> <i>
                            <svg class="svg-icon" id="mm-app-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </i> <span class="ml-2">Application</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
					<b-collapse @shown="showCollapse('app')" @hide="hideCollapse" tag="ul" id="app" class="submenu" accordion="my-accordion" :visible="checkActive(pages.concat(app,user))">
						<li :class="checkActive(user) ? 'active' : ''">
							<a v-b-toggle.user class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-user-1" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </i> <span class="">User Details</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
							<b-collapse tag="ul" id="user" class="submenu" accordion="child-accordion">
								<li :class="checkActive('app.user-profile') ? 'active' : ''">
									<router-link :to="{ name: 'app.user-profile'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon" id="mm-user-1-1" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </i><span class="">User Profile</span> </router-link>
								</li>
								<li :class="checkActive('app.user-add') ? 'active' : ''">
									<router-link :to="{name: 'app.user-add'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon" id="mm-user-1-2" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                            </svg>
                                        </i><span class="">User Add</span> </router-link>
								</li>
								<li :class="checkActive('app.user-list') ? 'active' : ''">
									<router-link :to="{name: 'app.user-list'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon" id="mm-user-1-3" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                            </svg>
                                        </i><span class="">User List</span> </router-link>
								</li>
							</b-collapse>
						</li>
						<li :class="checkActive('app.chat') ? 'active' : ''">
							<router-link :to="{name: 'app.chat'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-chat-1" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </i><span class="">Chat</span> </router-link>
						</li>
						<li :class="checkActive('app.todo') ? 'active' : ''">
							<router-link :to="{name: 'app.todo'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-todo-1" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </i><span class="">Todo</span> </router-link>
						</li>
					</b-collapse>
				</li>
				<li :class="checkActive(ui) ? 'active' : ''">
					<a v-b-toggle.ui class=" svg-icon"> <i>
                            <svg class="svg-icon" id="mm-ui-1" width="20" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                        </i> <span class="ml-2">UI Elements</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
					<b-collapse @shown="showCollapse('ui')" @hide="hideCollapse" tag="ul" id="ui" class="submenu " accordion="my-accordion" :visible="checkActive(ui)">
						<li :class="checkActive('Ui.avatars') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.avatars'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-0" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </i><span class="">Avatars</span> </router-link>
						</li>
						<li :class="checkActive('Ui.alerts') ? 'active' : ''">
							<router-link :to="{name: 'Ui.alerts'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-1" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                </i><span class="">Alerts</span> </router-link>
						</li>
						<li :class="checkActive('Ui.badges') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.badges'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </i><span class="">Badges</span> </router-link>
						</li>
						<li :class="checkActive('Ui.breadcrumbs') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.breadcrumbs'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </i><span class="">Breadcrumb</span> </router-link>
						</li>
						<li :class="checkActive('Ui.buttons') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.buttons'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2}
                                            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                    </svg>
                                </i><span class="">Buttons</span> </router-link>
						</li>
						<li :class="checkActive('Ui.button-groups') ? 'active' : ''">
							<router-link :to="{name: 'Ui.button-groups'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-5" width="20" heigth="20"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </i><span class="">Buttons Group</span> </router-link>
						</li>
						<li :class="checkActive('Ui.boxshadows') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.boxshadows'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-6" width="20" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </i><span class="">Box Shadow</span> </router-link>
						</li>
						<li :class="checkActive('Ui.colors') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.colors'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-7" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </i><span class="">Colors</span> </router-link>
						</li>
						<li :class="checkActive('Ui.cards') ? 'active' : ''">
							<router-link :to="{name: 'Ui.cards'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </i><span class="">Cards</span> </router-link>
						</li>
						<li :class="checkActive('Ui.carousels') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.carousels'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-9" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                    </svg>
                                </i><span class="">Carousel</span> </router-link>
						</li>
						<li :class="checkActive('Ui.grids') ? 'active' : ''">
							<router-link :to="{name: 'Ui.grids'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-10" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </i><span class="">Grid</span> </router-link>
						</li>
						<li :class="checkActive('Ui.images') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.images'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-12" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </i><span class="">Images</span> </router-link>
						</li>
						<li :class="checkActive('Ui.list-groups') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.list-groups'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon feather feather-list" id="mm-ui-1-13" xmlns="http://www.w3.org/2000/svg" width="20"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" >
                                        <line x1="8" y1="6" x2="21" y2="6"></line>
                                        <line x1="8" y1="12" x2="21" y2="12"></line>
                                        <line x1="8" y1="18" x2="21" y2="18"></line>
                                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                    </svg>
                                </i><span class="">list Group</span> </router-link>
						</li>
						<li :class="checkActive('Ui.media-objects') ? 'active' : ''">
							<router-link :to="{name: 'Ui.media-objects'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-14" width="20" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </i><span class="">Media</span> </router-link>
						</li>
						<li :class="checkActive('Ui.modals') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.modals'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon feather feather-columns" id="mm-ui-1-15" xmlns="http://www.w3.org/2000/svg" width="20"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" >
                                        <path
                                            d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18">
                                        </path>
                                    </svg>
                                </i><span class="">Modal</span> </router-link>
						</li>
						<li :class="checkActive('Ui.notifications') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.notifications'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-16" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </i><span class="">Notifications</span> </router-link>
						</li>
						<li :class="checkActive('Ui.paginations') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.paginations'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-17" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </i><span class="">Pagination</span> </router-link>
						</li>
						<li :class="checkActive('Ui.popovers') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.popovers'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-18" xmlns="http://www.w3.org/2000/svg" width="20"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="7.5" y1="4.21" x2="7.5" y2="4.22" />
                                        <line x1="4.21" y1="7.5" x2="4.21" y2="7.51" />
                                        <line x1="3" y1="12" x2="3" y2="12.01" />
                                        <line x1="4.21" y1="16.5" x2="4.21" y2="16.51" />
                                        <line x1="7.5" y1="19.79" x2="7.5" y2="19.8" />
                                        <line x1="12" y1="21" x2="12" y2="21.01" />
                                        <line x1="16.5" y1="19.79" x2="16.5" y2="19.8" />
                                        <line x1="19.79" y1="16.5" x2="19.79" y2="16.51" />
                                        <line x1="21" y1="12" x2="21" y2="12.01" />
                                        <line x1="19.79" y1="7.5" x2="19.79" y2="7.51" />
                                        <line x1="16.5" y1="4.21" x2="16.5" y2="4.22" />
                                        <line x1="12" y1="3" x2="12" y2="3.01" />
                                    </svg>
                                </i><span class="">Popovers</span> </router-link>
						</li>
						<li :class="checkActive('Ui.progressbars') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.progressbars'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon feather feather-hard-drive" id="mm-ui-1-19" xmlns="http://www.w3.org/2000/svg" width="20"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        >
                                        <line x1="22" y1="12" x2="2" y2="12"></line>
                                        <path
                                            d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z">
                                        </path>
                                        <line x1="6" y1="16" x2="6.01" y2="16"></line>
                                        <line x1="10" y1="16" x2="10.01" y2="16"></line>
                                    </svg>
                                </i><span class="">Progressbars</span> </router-link>
						</li>
						<li :class="checkActive('Ui.typographys') ? 'active' : ''">
							<router-link :to="{name: 'Ui.typographys'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-20" width="20" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                    </svg>
                                </i> <span class="">Typography</span> </router-link>
						</li>
						<li :class="checkActive('Ui.tabs') ? 'active' : ''">
							<router-link :to="{name: 'Ui.tabs'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-21" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                    </svg>
                                </i> <span class="">Tabs</span> </router-link>
						</li>
						<li :class="checkActive('Ui.tooltips') ? 'active' : ''">
							<router-link :to="{name: 'Ui.tooltips'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-22" xmlns="http://www.w3.org/2000/svg" width="20"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M4 13v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a2 2 0 0 0 6 0v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a8 8 0 0 1 -16 0" />
                                        <line x1="4" y1="8" x2="9" y2="8" />
                                        <line x1="15" y1="8" x2="19" y2="8" />
                                    </svg>
                                </i> <span class="">Tooltips</span> </router-link>
						</li>
						<li :class="checkActive('Ui.Embed-videos') ? 'active' : ''">
							<router-link :to="{ name: 'Ui.Embed-videos'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-ui-1-23" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </i> <span class="">Video</span> </router-link>
						</li>
					</b-collapse>
				</li>
				<li :class="checkActive(pages.concat(formControls,formWidget)) ? 'active' : ''">
					<a v-b-toggle.form class=" svg-icon"> <i>
                            <svg class="svg-icon" id="mm-form-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </i> <span class="ml-2">Forms</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
					<b-collapse tag="ul" @shown="showCollapse('form')" @hide="hideCollapse" id="form" class="submenu " accordion="my-accordion" :visible="checkActive(pages.concat(formControls,formWidget))">
						<li :class="checkActive(formControls) ? 'active' : ''">
							<a v-b-toggle.form-controls class=" svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-form-1-1" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </i><span class="">Form Controls</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
							<b-collapse tag="ul"  id="form-controls" class="submenu" accordion="child-accordion">
								<li :class="checkActive( 'controls.form-layout') ? 'active' : ''">
									<router-link :to="{name: 'controls.form-layout'}"> <i class="">
                                            <svg class="svg-icon feather feather-book" id="mm-form-1-2" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                >
                                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                <path
                                                    d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z">
                                                </path>
                                            </svg>
                                        </i><span class="">Form Elements</span> </router-link>
								</li>
								<li :class="checkActive('controls.form-input') ? 'active' : ''">
									<router-link :to="{name: 'controls.form-input'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon" id="mm-form-1-3" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <rect x="2" y="6" width="20" height="12" rx="2" />
                                                <line x1="6" y1="10" x2="6" y2="10" />
                                                <line x1="10" y1="10" x2="10" y2="10" />
                                                <line x1="14" y1="10" x2="14" y2="10" />
                                                <line x1="18" y1="10" x2="18" y2="10" />
                                                <line x1="6" y1="14" x2="6" y2="14.01" />
                                                <line x1="18" y1="14" x2="18" y2="14.01" />
                                                <line x1="10" y1="14" x2="14" y2="14" />
                                            </svg>
                                        </i><span class="">Form Input</span> </router-link>
								</li>
								<li :class="checkActive('controls.form-validation') ? 'active' : ''">
									<router-link :to="{name: 'controls.form-validation'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon" id="mm-form-1-4" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </i><span class="">Form Validation</span> </router-link>
								</li>
								<li :class="checkActive('controls.form-switch') ? 'active' : ''">
									<router-link :to="{ name: 'controls.form-switch'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon feather feather-toggle-left" id="mm-form-1-5" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                >
                                                <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
                                                <circle cx="8" cy="12" r="3"></circle>
                                            </svg>
                                        </i><span class="">Form Switch</span> </router-link>
								</li>
								<li :class="checkActive( 'controls.form-checkbox') ? 'active' : ''">
									<router-link :to="{name: 'controls.form-checkbox'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon feather feather-check-square" id="mm-form-1-6" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                >
                                                <polyline points="9 11 12 14 22 4"></polyline>
                                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11">
                                                </path>
                                            </svg>
                                        </i><span class="">Form Checkbox</span> </router-link>
								</li>
								<li :class="checkActive('controls.form-radio') ? 'active' : ''">
									<router-link :to="{ name: 'controls.form-radio'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon" id="mm-form-1-7" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <circle cx="12" cy="12" r="9" />
                                                <path d="M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9" />
                                                <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
                                                <circle cx="12" cy="16.5" r=".5" fill="currentColor" />
                                            </svg>
                                        </i><span class="">Form Radio</span> </router-link>
								</li>
								<li :class="checkActive('controls.form-textarea') ? 'active' : ''">
									<router-link :to="{name: 'controls.form-textarea'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon feather feather-type" id="mm-form-1-8" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                >
                                                <polyline points="4 7 4 4 20 4 20 7"></polyline>
                                                <line x1="9" y1="20" x2="15" y2="20"></line>
                                                <line x1="12" y1="4" x2="12" y2="20"></line>
                                            </svg>
                                        </i><span class="">Form Textarea</span> </router-link>
								</li>
							</b-collapse>
						</li>
						<li :class="checkActive(formWidget) ? 'active' : ''">
							<a v-b-toggle.form-widget class=" svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-form-2" xmlns="http://www.w3.org/2000/svg" width="20"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x="5" y="3" width="14" height="18" rx="2" />
                                        <line x1="9" y1="7" x2="15" y2="7" />
                                        <line x1="9" y1="11" x2="15" y2="11" />
                                        <line x1="9" y1="15" x2="13" y2="15" />
                                    </svg>
                                </i><span class="">Form Widget</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
							<b-collapse tag="ul"  @shown="showCollapse('form')" @hide="hideCollapse" id="form-widget" class="submenu " accordion="child-accordion">
								<li :class="checkActive('widget.form-datepicker') ? 'active' : ''">
									<router-link :to="{ name: 'widget.form-datepicker'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon" id="mm-form-2-1" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </i><span class="">Datepicker</span> </router-link>
								</li>
								<li :class="checkActive('widget.form-select') ? 'active' : ''">
									<router-link :to="{ name: 'widget.form-select'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon" id="mm-form-2-2" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                                <path d="M9 11l3 3l3 -3" />
                                            </svg>
                                        </i><span class="">Select2</span> </router-link>
								</li>
								<li :class="checkActive('widget.form-file-uploader') ? 'active' : ''">
									<router-link :to="{ name: 'widget.form-file-uploader'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon" id="mm-form-2-3" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                        </i><span class="">File Upload</span> </router-link>
								</li>
								<li :class="checkActive('widget.form-quill') ? 'active' : ''">
									<router-link :to="{name: 'widget.form-quill'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon feather feather-type" id="mm-form-2-4" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                              >
                                                <polyline points="4 7 4 4 20 4 20 7"></polyline>
                                                <line x1="9" y1="20" x2="15" y2="20"></line>
                                                <line x1="12" y1="4" x2="12" y2="20"></line>
                                            </svg>
                                        </i><span class="">Form quill</span> </router-link>
								</li>
							</b-collapse>
						</li>
					</b-collapse>
				</li>
				<li :class="checkActive(table) ? 'active' : ''">
					<a v-b-toggle.table class=" svg-icon"> <i>
                            <svg class="svg-icon" id="mm-table-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </i> <span class="ml-2">Table</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
					<b-collapse tag="ul"  @shown="showCollapse('table')" @hide="hideCollapse" id="table" class="submenu " accordion="my-accordion" :visible="checkActive(table)">
						<li :class="checkActive('table.basic-table') ? 'active' : ''">
							<router-link :to="{ name: 'table.basic-table'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-table-1-1" xmlns="http://www.w3.org/2000/svg"
                                        width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x="4" y="4" width="16" height="16" rx="2" />
                                        <line x1="4" y1="10" x2="20" y2="10" />
                                        <line x1="10" y1="4" x2="10" y2="20" />
                                    </svg>
                                </i><span class="">Basic Tables</span> </router-link>
						</li>
						<li :class="checkActive('table.data-table') ? 'active' : ''">
							<router-link :to="{name: 'table.data-table'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-table-1-2" xmlns="http://www.w3.org/2000/svg"
                                        width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x="4" y="4" width="16" height="16" rx="2" />
                                        <line x1="4" y1="10" x2="20" y2="10" />
                                        <line x1="10" y1="4" x2="10" y2="20" />
                                    </svg>
                                </i><span class="">Data Table</span> </router-link>
						</li>
						<li :class="checkActive('table.edit-table') ? 'active' : ''">
							<router-link :to="{name: 'table.edit-table'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-table-1-3" xmlns="http://www.w3.org/2000/svg"
                                        width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="4" y1="6" x2="9.5" y2="6" />
                                        <line x1="4" y1="10" x2="9.5" y2="10" />
                                        <line x1="4" y1="14" x2="9.5" y2="14" />
                                        <line x1="4" y1="18" x2="9.5" y2="18" />
                                        <line x1="14.5" y1="6" x2="20" y2="6" />
                                        <line x1="14.5" y1="10" x2="20" y2="10" />
                                        <line x1="14.5" y1="14" x2="20" y2="14" />
                                        <line x1="14.5" y1="18" x2="20" y2="18" />
                                    </svg>
                                </i><span class="">Editable Table</span> </router-link>
						</li>
						<!-- <li class="">
                            <router-link to="../backend/table-tree.html" class="svg-icon">
                                <i class="">
                                    <svg class="svg-icon" id="mm-table-1-4" xmlns="http://www.w3.org/2000/svg"
                                        width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1z" />
                                        <path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" />
                                    </svg>
                                </i><span class="">Table Tree</span>
                            </router-link>
                        </li> -->
					</b-collapse>
				</li>
				<li :class="checkActive(icon) ? 'active' : ''">
					<a v-b-toggle.icon class=" svg-icon"> <i>
                            <svg class="svg-icon" id="mm-icon-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </i> <span class="ml-2">Icons</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
					<b-collapse tag="ul" @shown="showCollapse('icon')" @hide="hideCollapse" id="icon" class="submenu "  :visible="checkActive(icon)" accordion="my-accordion">
						<li :class="checkActive('icon.dripicon') ? 'active' : ''">
							<router-link :to="{name: 'icon.dripicon'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon feather feather-layers" id="mm-icon-1-1" xmlns="http://www.w3.org/2000/svg" width="20"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" >
                                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                        <polyline points="2 17 12 22 22 17"></polyline>
                                        <polyline points="2 12 12 17 22 12"></polyline>
                                    </svg>
                                </i><span class="">Dripicons</span> </router-link>
						</li>
						<li :class="checkActive('icon.fontawsome') ? 'active' : ''">
							<router-link :to="{name: 'icon.fontawsome'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon feather feather-facebook" id="mm-icon-1-2" xmlns="http://www.w3.org/2000/svg" width="20"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                        </path>
                                    </svg>
                                </i><span class="">Font Awesome</span> </router-link>
						</li>
						<li :class="checkActive('icon.lineawsome') ? 'active' : ''">
							<router-link :to="{ name: 'icon.lineawsome'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-icon-1-3" xmlns="http://www.w3.org/2000/svg" width="20"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="9" cy="5" r="1" />
                                        <circle cx="9" cy="12" r="1" />
                                        <circle cx="9" cy="19" r="1" />
                                        <circle cx="15" cy="5" r="1" />
                                        <circle cx="15" cy="12" r="1" />
                                        <circle cx="15" cy="19" r="1" />
                                    </svg>
                                </i><span class="">Line Awesome</span> </router-link>
						</li>
						<li :class="checkActive('icon.remixicon') ? 'active' : ''">
							<router-link :to="{ name: 'icon.remixicon'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon feather feather-circle" id="mm-icon-1-4" xmlns="http://www.w3.org/2000/svg" width="20"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" >
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                </i><span class="">Remixicon</span> </router-link>
						</li>
					</b-collapse>
				</li>
				<li :class="checkActive(auth) ? 'active' : ''">
					<a v-b-toggle.auth class=" svg-icon"> <i>
                            <svg class="svg-icon" id="mm-icon-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </i> <span class="ml-2">Authentication</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
					<b-collapse tag="ul"  @shown="showCollapse('auth')" @hide="hideCollapse"  id="auth" class="submenu " :visible="checkActive(auth)" accordion="my-accordion">
						<li :class="checkActive('auth.login') ? 'active' : ''">
							<router-link :to="{name: 'auth.login'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-auth-1-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </i> <span class="">Login</span> </router-link>
						</li>
						<li :class="checkActive('auth.register') ? 'active' : ''">
							<router-link :to="{name: 'auth.register'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-auth-1-2" width="20" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </i> <span class="">Register</span> </router-link>
						</li>
						<li :class="checkActive('auth.recover-password') ? 'active' : ''">
							<router-link :to="{name: 'auth.recover-password'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-auth-1-3" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                    </svg>
                                </i> <span class="">Recover Password</span> </router-link>
						</li>
						<li :class="checkActive('auth.confirm-mail') ? 'active' : ''">
							<router-link :to="{name: 'auth.confirm-mail'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-auth-1-4" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                    </svg>
                                </i> <span class="">Confirm Mail</span> </router-link>
						</li>
						<li :class="checkActive('auth.lock-screen') ? 'active' : ''">
							<router-link :to="{name: 'auth.lock-screen'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon feather feather-lock" id="mm-auth-1-5" xmlns="http://www.w3.org/2000/svg" width="20"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" >
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                </i> <span class="">Lock Screen</span> </router-link>
						</li>
					</b-collapse>
				</li>
				<li :class="checkActive(charts) ? 'active' : ''">
					<a v-b-toggle.charts class=" svg-icon"> <i>
                            <svg class="svg-icon" id="mm-chart-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                        </i> <span class="ml-2">Charts</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
					<b-collapse tag="ul"  @shown="showCollapse('charts')" @hide="hideCollapse" id="charts" :visible="checkActive(charts)" class="submenu " accordion="my-accordion">
						<li :class="checkActive('chart.apexchart') ? 'active' : ''">
							<router-link :to="{name: 'chart.apexchart'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-chart-1-1" width="20"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </i> <span class="">Apex Chart</span> </router-link>
						</li>
						<li :class="checkActive('chart.highchart') ? 'active' : ''">
							<router-link :to="{ name: 'chart.highchart'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-chart-1-2" width="20"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                    </svg>
                                </i> <span class="">High Chart</span> </router-link>
						</li>
						<li :class="checkActive('chart.morrischart') ? 'active' : ''">
							<router-link :to="{name: 'chart.morrischart'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-chart-1-3" width="20"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </i> <span class="">Morries Charts</span> </router-link>
						</li>
					</b-collapse>
				</li>
				<li :class="checkActive(pages.concat(extraPages,error,timeline)) ? 'active' : ''">
					<a v-b-toggle.pages class=" svg-icon"> <i>
                            <svg class="svg-icon" id="mm-extra-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                        </i> <span class="ml-2">Extra Pages</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
					<b-collapse tag="ul" @shown="showCollapse('pages')" @hide="hideCollapse" :visible="checkActive(pages.concat(extraPages,error,timeline))"  id="pages" class="submenu " accordion="my-accordion">
						<li :class="checkActive(timeline) ? 'active' : ''">
							<a v-b-toggle.timeline class=" svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-extra-1-2" xmlns="http://www.w3.org/2000/svg"
                                        width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="12" y1="12" x2="12" y2="12.01" />
                                        <path
                                            d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                                            transform="rotate(45 12 12)" />
                                        <path
                                            d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                                            transform="rotate(-45 12 12)" />
                                    </svg>
                                </i><span class="">Timeline</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
							<b-collapse tag="ul" id="timeline" class="submenu" accordion="child-accordion">
								<li :class="checkActive('time.line') ? 'active' : ''">
									<router-link :to="{name: 'time.line'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon" id="mm-extra-1-2-1" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <circle cx="12" cy="12" r="9" />
                                            </svg>
                                        </i><span class="">Timeline 1</span> </router-link>
								</li>
								<li :class="checkActive('time.line1') ? 'active' : ''">
									<router-link :to="{name: 'time.line1'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon feather feather-disc" id="mm-extra-1-2-2" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </i><span class="">Timeline 2</span> </router-link>
								</li>
							</b-collapse>
						</li>
						<li :class="checkActive(error) ? 'active' : ''">
							<a v-b-toggle.pages-error class=" svg-icon"> <i class="">
                                    <svg class="feather feather-alert-triangle svg-icon" id="mm-extra-1-4" xmlns="http://www.w3.org/2000/svg"
                                        width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        >
                                        <path
                                            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z">
                                        </path>
                                        <line x1="12" y1="9" x2="12" y2="13"></line>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                </i><span class="">Error</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
							<b-collapse tag="ul" id="pages-error" class="submenu " accordion="child-accordion">
								<li :class="checkActive('error.404') ? 'active' : ''">
									<router-link :to="{name: 'error.404'}" class="svg-icon"> <i class="">
                                            <svg class="feather feather-alert-circle svg-icon" id="mm-extra-1-4-1" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                            </svg>
                                        </i><span class="">Error 404</span> </router-link>
								</li>
								<li :class="checkActive('error.500') ? 'active' : ''">
									<router-link :to="{name: 'error.500'}" class="svg-icon"> <i class="">
                                            <svg class="svg-icon" id="mm-extra-1-4-2" xmlns="http://www.w3.org/2000/svg"
                                                width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M9 9v-1a3 3 0 0 1 6 0v1" />
                                                <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
                                                <line x1="3" y1="13" x2="7" y2="13" />
                                                <line x1="17" y1="13" x2="21" y2="13" />
                                                <line x1="12" y1="20" x2="12" y2="14" />
                                                <line x1="4" y1="19" x2="7.35" y2="17" />
                                                <line x1="20" y1="19" x2="16.65" y2="17" />
                                                <line x1="4" y1="7" x2="7.75" y2="9.4" />
                                                <line x1="20" y1="7" x2="16.25" y2="9.4" />
                                            </svg>
                                        </i><span class="">Error 500</span> </router-link>
								</li>
							</b-collapse>
						</li>
						<li :class="checkActive('price.pay') ? 'active' : ''">
							<router-link :to="{name: 'price.pay'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-extra-1-3-1" xmlns="http://www.w3.org/2000/svg"
                                        width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x="4" y="4" width="16" height="16" rx="2" />
                                    </svg>
                                </i><span class="">Pricing</span> </router-link>
						</li>
						<li :class="checkActive( 'pages.invoices') ? 'active' : ''">
							<router-link :to="{name: 'pages.invoices'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-extra-1-5" xmlns="http://www.w3.org/2000/svg"
                                        width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path
                                            d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                        <line x1="9" y1="9" x2="10" y2="9" />
                                        <line x1="9" y1="13" x2="15" y2="13" />
                                        <line x1="9" y1="17" x2="15" y2="17" />
                                    </svg>
                                </i><span class="">Invoice</span> </router-link>
						</li>
						<li :class="checkActive('pages.faq') ? 'active' : ''">
							<router-link :to="{name: 'pages.faq'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-extra-1-7" xmlns="http://www.w3.org/2000/svg"
                                        width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" />
                                        <path d="M7 14h5m2.9 0h2.1" />
                                        <path d="M16 16l-2.51 -4.518m-1.487 -2.677l-1.003 -1.805" />
                                    </svg>
                                </i><span class="">Faq</span> </router-link>
						</li>
						<li :class="checkActive('pages.blank-page') ? 'active' : ''">
							<router-link :to="{name: 'pages.blank-page'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-extra-1-8" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                                    </svg>
                                </i><span class="">Blank Page</span> </router-link>
						</li>
						<li :class="checkActive( 'pages.maintenance') ? 'active' : ''">
							<router-link :to="{name: 'pages.maintenance'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-extra-1-9" xmlns="http://www.w3.org/2000/svg"
                                        width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="12" cy="7" r="3" />
                                        <circle cx="17" cy="16" r="3" />
                                        <circle cx="7" cy="16" r="3" />
                                    </svg>
                                </i><span class="">Maintenance</span> </router-link>
						</li>
						<li :class="checkActive('pages.commingsoon') ? 'active' : ''">
							<router-link :to="{name: 'pages.commingsoon'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-extra-1-10" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </i><span class="">Coming Soon</span> </router-link>
						</li>
					</b-collapse>
				</li>
			</ul>
		</nav>
		<div id="sidebar-bottom" class="position-relative sidebar-bottom">
			<div class="card bg-primary rounded">
				<div class="card-body">
					<div class="sidebarbottom-content">
						<div class="image"> <img src="@/assets/images/layouts/layout-1/side-bkg.png" class="img-fluid" alt="side-bkg" /> </div>
						<h5 class="mb-3 text-white mt-3">Did you Know ?</h5>
						<p class="mb-0 text-white">You can add additional user in your Account's Settings</p>
						<button type="button" class="btn btn-dark mt-3"> New Program </button>
					</div>
				</div>
			</div>
		</div>
		<div class="pt-5 pb-2"></div>
	</div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import {core} from '@/config/pluginInit'
export default {
  name:"SidebarStyle",
  props:{
     items: Array,
  },
  data () {
    return{
      homeurl:'',
      dashboards:['layout.dashboard1','layout.dashboard2','layout.dashboard3'],
      app:['app.chat', 'app.todo'],
      charts:['chart.amchart','chart.apexchart','chart.highchart','chart.morrischart',],
      user:['app.user-profile','app.user-add','app.user-list'],
      ui:['Ui.avatars','Ui.alerts','Ui.badges','Ui.breadcrumbs','Ui.buttons','Ui.button-groups','Ui.boxshadows','Ui.colors','Ui.cards','Ui.carousels','Ui.grids','Ui.helper-classes','Ui.images','Ui.list-groups','Ui.media-objects','Ui.modals','Ui.notifications'
      ,'Ui.paginations','Ui.popovers','Ui.progressbars','Ui.typographys','Ui.tabs','Ui.tooltips','Ui.Embed-videos'],
      auth:['auth.login','auth.register','auth.recover-password','auth.confirm-mail','auth.lock-screen'],
      pricing:['price.pay','price.pay2'],
      icon:['icon.dripicon', 'icon.fontawsome','icon.lineawsome','icon.remixicon',],
      error:['error.404','error.500'],
      formControls:['controls.form-checkbox','controls.form-layout','controls.form-input','controls.form-radio','controls.form-switch','controls.form-textarea','controls.form-validation',],
      formWidget:['widget.form-datepicker','widget.form-file-uploader','widget.form-quill',],
      table:['table.basic-table','table.data-table','table.edit-table',],
      timeline:['time.line','time.line1'],
      extraPages:[ 'price.pay','pages.maintenance','pages.commingsoon','pages.invoices','pages.subscribers','pages.faq','pages.blank-page',],
      pages:[]
    }
  },
  mounted () {
    core.SmoothScrollbar()
  },
    destroyed () {
        core.SmoothScrollbar()
    },
    computed : {
        ...mapGetters({
            logo:'darklogo',
            sidelogo:'logo',
        })
    },
    methods: {
        checkActive(route) {
            if (this.$route.name == route) {
                return true;
            }
            if (route.includes(this.$route.name)) {
                return true
            }
        },
        miniSidebar(){
            core.triggerSet()
        },
        showCollapse(collapseId) {
            document.getElementById(collapseId).closest('li').classList.add('active')
        },
        hideCollapse() {
            const list = document.querySelector('.mm-sidebar-menu').querySelectorAll('.submenu')
            Array.from(list, elem => {
                if (elem.closest('.active') !== null && elem.closest('.active') !== undefined) {
                    elem.closest('.active').classList.remove('active')
                }
            })
        }
    },
}
</script>