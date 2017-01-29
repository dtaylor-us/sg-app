package com.smallgroup.app.domain;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
public class Media {

    @Version
    private Integer version;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "MediaId")
    private Long id;

    private String mediaName;

    @OneToMany(mappedBy = "media")
    private Set<MediaFeature> mailboxCalendars = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMediaName() {
        return mediaName;
    }

    public Media mediaName(String mediaName) {
        this.mediaName = mediaName;
        return this;
    }

    public void setMediaName(String mediaName) {
        this.mediaName = mediaName;
    }

    public Set<MediaFeature> getMailboxCalendars() {
        return mailboxCalendars;
    }

    public Media mailboxCalendars(Set<MediaFeature> mediaFeatures) {
        this.mailboxCalendars = mediaFeatures;
        return this;
    }

    public Media addMailboxCalendar(MediaFeature mediaFeature) {
        mailboxCalendars.add(mediaFeature);
        mediaFeature.setMedia(this);
        return this;
    }

    public Media removeMailboxCalendar(MediaFeature mediaFeature) {
        mailboxCalendars.remove(mediaFeature);
        mediaFeature.setMedia(null);
        return this;
    }

    public void setMailboxCalendars(Set<MediaFeature> mediaFeatures) {
        this.mailboxCalendars = mediaFeatures;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Media media = (Media) o;
        if (media.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, media.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Media{" +
                "id=" + id +
                ", mediaName='" + mediaName + "'" +
                '}';
    }
}
