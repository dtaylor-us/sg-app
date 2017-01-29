package com.smallgroup.app.domain;

import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.Objects;

@Entity

public class GroupAccount {

    @Version
    private Integer version;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "GroupAccountId")
    private Long id;

    private String groupName;
    private String groupDesc;
    private String groupRules;
    private String groupEmail;
    private ZonedDateTime startDate;
    private ZonedDateTime endDate;

    @OneToOne
    @JoinColumn(unique = true)
    private Calendar groupCalendar;

    @OneToOne
    @JoinColumn(unique = true)
    private Mailbox groupMailbox;

    @OneToOne
    @JoinColumn(unique = true)
    private Media groupMedia;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGroupName() {
        return groupName;
    }

    public GroupAccount groupName(String groupName) {
        this.groupName = groupName;
        return this;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getGroupDesc() {
        return groupDesc;
    }

    public GroupAccount groupDesc(String groupDesc) {
        this.groupDesc = groupDesc;
        return this;
    }

    public void setGroupDesc(String groupDesc) {
        this.groupDesc = groupDesc;
    }

    public String getGroupRules() {
        return groupRules;
    }

    public GroupAccount groupRules(String groupRules) {
        this.groupRules = groupRules;
        return this;
    }

    public void setGroupRules(String groupRules) {
        this.groupRules = groupRules;
    }

    public String getGroupEmail() {
        return groupEmail;
    }

    public GroupAccount groupEmail(String groupEmail) {
        this.groupEmail = groupEmail;
        return this;
    }

    public void setGroupEmail(String groupEmail) {
        this.groupEmail = groupEmail;
    }

    public ZonedDateTime getStartDate() {
        return startDate;
    }

    public GroupAccount startDate(ZonedDateTime startDate) {
        this.startDate = startDate;
        return this;
    }

    public void setStartDate(ZonedDateTime startDate) {
        this.startDate = startDate;
    }

    public ZonedDateTime getEndDate() {
        return endDate;
    }

    public GroupAccount endDate(ZonedDateTime endDate) {
        this.endDate = endDate;
        return this;
    }

    public void setEndDate(ZonedDateTime endDate) {
        this.endDate = endDate;
    }

    public Calendar getGroupCalendar() {
        return groupCalendar;
    }

    public GroupAccount groupCalendar(Calendar calendar) {
        this.groupCalendar = calendar;
        return this;
    }

    public void setGroupCalendar(Calendar calendar) {
        this.groupCalendar = calendar;
    }

    public Mailbox getGroupMailbox() {
        return groupMailbox;
    }

    public GroupAccount groupMailbox(Mailbox mailbox) {
        this.groupMailbox = mailbox;
        return this;
    }

    public void setGroupMailbox(Mailbox mailbox) {
        this.groupMailbox = mailbox;
    }

    public Media getGroupMedia() {
        return groupMedia;
    }

    public GroupAccount groupMedia(Media media) {
        this.groupMedia = media;
        return this;
    }

    public void setGroupMedia(Media media) {
        this.groupMedia = media;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        GroupAccount groupAccount = (GroupAccount) o;
        if (groupAccount.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, groupAccount.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "GroupAccount{" +
                "id=" + id +
                ", groupName='" + groupName + "'" +
                ", groupDesc='" + groupDesc + "'" +
                ", groupRules='" + groupRules + "'" +
                ", groupEmail='" + groupEmail + "'" +
                ", startDate='" + startDate + "'" +
                ", endDate='" + endDate + "'" +
                '}';
    }
}
