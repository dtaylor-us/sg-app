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
                            <li class="active"><a href="#calendar-tab" data-toggle="tab" aria-expanded="false">Calendar</a>
                            </li>
                            <li class=""><a href="#mailbox-tab" data-toggle="tab"
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
                        <div class="tab-pane fade active in" id="calendar-tab">
                            <div class="row">
                                <%@ include file="group/_groupCalendar.jsp" %>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="mailbox-tab">
                            <div class="row">
                                <%@ include file="group/_groupMailbox.jsp" %>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="media-tab">
                            <%@ include file="group/_groupMedia.jsp" %>

                        </div>
                    </div>
                </div>
                <!-- /.panel-body -->
            </div>
        </div>
    </div>

    <%@ include file="includes/_footer.jsp" %>


