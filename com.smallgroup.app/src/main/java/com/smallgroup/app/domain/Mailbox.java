package com.smallgroup.app.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
public class Mailbox {

    @Version
    private Integer version;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "MailboxId")
    private Long id;

    private String mailboxName;

    @OneToMany(mappedBy = "mailbox")
    private Set<Message> mailboxCalendars = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMailboxName() {
        return mailboxName;
    }

    public Mailbox mailboxName(String mailboxName) {
        this.mailboxName = mailboxName;
        return this;
    }

    public void setMailboxName(String mailboxName) {
        this.mailboxName = mailboxName;
    }

    public Set<Message> getMailboxCalendars() {
        return mailboxCalendars;
    }

    public Mailbox mailboxCalendars(Set<Message> messages) {
        this.mailboxCalendars = messages;
        return this;
    }

    public Mailbox addMailboxCalendar(Message message) {
        mailboxCalendars.add(message);
        message.setMailbox(this);
        return this;
    }

    public Mailbox removeMailboxCalendar(Message message) {
        mailboxCalendars.remove(message);
        message.setMailbox(null);
        return this;
    }

    public void setMailboxCalendars(Set<Message> messages) {
        this.mailboxCalendars = messages;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Mailbox mailbox = (Mailbox) o;
        if (mailbox.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, mailbox.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Mailbox{" +
                "id=" + id +
                ", mailboxName='" + mailboxName + "'" +
                '}';
    }
}
