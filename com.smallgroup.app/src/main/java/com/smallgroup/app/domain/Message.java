package com.smallgroup.app.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Message {

    @Version
    private Integer version;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "MessageId")
    private Long id;

    private String author;
    private String subject;
    private String createDate;
    private String content;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Mailbox mailbox;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public Message author(String author) {
        this.author = author;
        return this;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getSubject() {
        return subject;
    }

    public Message subject(String subject) {
        this.subject = subject;
        return this;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getCreateDate() {
        return createDate;
    }

    public Message createDate(String createDate) {
        this.createDate = createDate;
        return this;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getContent() {
        return content;
    }

    public Message content(String content) {
        this.content = content;
        return this;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Mailbox getMailbox() {
        return mailbox;
    }

    public Message mailbox(Mailbox mailbox) {
        this.mailbox = mailbox;
        return this;
    }

    public void setMailbox(Mailbox mailbox) {
        this.mailbox = mailbox;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Message message = (Message) o;
        if (message.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, message.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", author='" + author + "'" +
                ", subject='" + subject + "'" +
                ", createDate='" + createDate + "'" +
                ", content='" + content + "'" +
                '}';
    }
}
