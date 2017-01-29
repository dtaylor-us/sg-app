package com.smallgroup.app.domain;

import com.smallgroup.app.domain.enumeration.FeatureType;

import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.Objects;

@Entity
public class MediaFeature {

    @Version
    private Integer version;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "MediaFeatureId")
    private Long id;

    @Enumerated(EnumType.STRING)
    private FeatureType featureType;

    private String mediaDesc;

    private ZonedDateTime createDate;

    private ZonedDateTime dateModified;

    @ManyToOne
    private Media media;

    @OneToOne
    @JoinColumn(unique = true)
    private File mediaFeatureFile;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public FeatureType getFeatureType() {
        return featureType;
    }

    public MediaFeature featureType(FeatureType featureType) {
        this.featureType = featureType;
        return this;
    }

    public void setFeatureType(FeatureType featureType) {
        this.featureType = featureType;
    }

    public String getMediaDesc() {
        return mediaDesc;
    }

    public MediaFeature mediaDesc(String mediaDesc) {
        this.mediaDesc = mediaDesc;
        return this;
    }

    public void setMediaDesc(String mediaDesc) {
        this.mediaDesc = mediaDesc;
    }

    public ZonedDateTime getCreateDate() {
        return createDate;
    }

    public MediaFeature createDate(ZonedDateTime createDate) {
        this.createDate = createDate;
        return this;
    }

    public void setCreateDate(ZonedDateTime createDate) {
        this.createDate = createDate;
    }

    public ZonedDateTime getDateModified() {
        return dateModified;
    }

    public MediaFeature dateModified(ZonedDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public void setDateModified(ZonedDateTime dateModified) {
        this.dateModified = dateModified;
    }

    public Media getMedia() {
        return media;
    }

    public MediaFeature media(Media media) {
        this.media = media;
        return this;
    }

    public void setMedia(Media media) {
        this.media = media;
    }

    public File getMediaFeatureFile() {
        return mediaFeatureFile;
    }

    public MediaFeature mediaFeatureFile(File file) {
        this.mediaFeatureFile = file;
        return this;
    }

    public void setMediaFeatureFile(File file) {
        this.mediaFeatureFile = file;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        MediaFeature mediaFeature = (MediaFeature) o;
        if (mediaFeature.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, mediaFeature.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "MediaFeature{" +
                "id=" + id +
                ", featureType='" + featureType + "'" +
                ", mediaDesc='" + mediaDesc + "'" +
                ", createDate='" + createDate + "'" +
                ", dateModified='" + dateModified + "'" +
                '}';
    }
}
