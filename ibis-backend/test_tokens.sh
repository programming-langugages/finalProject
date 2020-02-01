#!/bin/bash
#Executing antlr=java -jar /usr/local/lib/antlr-4.7.2-complete.jar
java -jar /usr/local/lib/antlr-4.7.2-complete.jar -Dlanguage=Java einfach.g4
javac *.java
#Executing grun=java org.antlr.v4.gui.TestRig
java org.antlr.v4.gui.TestRig einfach einfach_program -tokens
java org.antlr.v4.gui.TestRig einfach einfach_program -gui
rm *.java
rm *.class
