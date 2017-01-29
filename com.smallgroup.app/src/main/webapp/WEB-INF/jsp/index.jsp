<%@ include file="includes/_header.jsp" %>
<%@ include file="includes/_navbar.jsp" %>

<!-- Page Content -->
<div class="container spacer-50">

    <!-- Group Details-->
    <div class="well spacer-25">
        <%@ include file="group/_groupDetails.jsp" %>
    </div>

    <!-- /.row -->
    <div class="row spacer-25">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="col-sm-12 panel-heading">
                    <!-- Nav tabs -->
                    <div class="col-sm-3">
                        <ul class="nav nav-pills">
                            <li class=""><a href="#events-tab" data-toggle="tab" aria-expanded="false">Calendar</a>
                            </li>
                            <li class="active"><a href="#messages-tab" data-toggle="tab"
                                                  aria-expanded="true">Mailbox</a>
                            </li>
                            <li class=""><a href="#media-tab" data-toggle="tab" aria-expanded="false">Media</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-sm-offset-5 col-sm-4">
                        <ul class="nav navbar-link navbar-right nav-pills">
                            <li class=""><a href="#">Filter</a></li>
                            <li class=""><a href="#">Settings</a></li>
                        </ul>
                    </div>

                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane fade" id="events-tab">
                            <div class="row">
                                <%@ include file="group/_groupCalendar.jsp" %>
                            </div>
                        </div>
                        <div class="tab-pane fade active in" id="messages-tab">
                            <div class="row">
                                <%@ include file="group/_groupMailbox.jsp" %>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="media-tab">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <!-- /.panel-body -->
            </div>
        </div>
    </div>

    <%@ include file="includes/_footer.jsp" %>


