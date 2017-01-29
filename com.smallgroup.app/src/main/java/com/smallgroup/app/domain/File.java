package com.smallgroup.app.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
public class File {

    @Version
    private Integer version;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "FileId")
    private Long id;
    private String fileType;

    @Lob
    private byte[] file;
    private String fileContentType;
    private String fileSize;
    private String fileName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileType() {
        return fileType;
    }

    public File fileType(String fileType) {
        this.fileType = fileType;
        return this;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public byte[] getFile() {
        return file;
    }

    public File file(byte[] file) {
        this.file = file;
        return this;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    public String getFileContentType() {
        return fileContentType;
    }

    public File fileContentType(String fileContentType) {
        this.fileContentType = fileContentType;
        return this;
    }

    public void setFileContentType(String fileContentType) {
        this.fileContentType = fileContentType;
    }

    public String getFileSize() {
        return fileSize;
    }

    public File fileSize(String fileSize) {
        this.fileSize = fileSize;
        return this;
    }

    public void setFileSize(String fileSize) {
        this.fileSize = fileSize;
    }

    public String getFileName() {
        return fileName;
    }

    public File fileName(String fileName) {
        this.fileName = fileName;
        return this;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        File file = (File) o;
        if (file.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, file.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "File{" +
                "id=" + id +
                ", fileType='" + fileType + "'" +
                ", file='" + file + "'" +
                ", fileContentType='" + fileContentType + "'" +
                ", fileSize='" + fileSize + "'" +
                ", fileName='" + fileName + "'" +
                '}';
    }
}
